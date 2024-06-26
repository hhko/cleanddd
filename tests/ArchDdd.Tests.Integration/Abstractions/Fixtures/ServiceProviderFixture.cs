﻿using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using NSubstitute;
using Microsoft.Extensions.Logging;
using static ArchDdd.Tests.Integration.Abstractions.Constants.Constants;
using static ArchDdd.Tests.Integration.Abstractions.Constants.Constants.IntegrationTest;
using Microsoft.Extensions.Hosting;

namespace ArchDdd.Tests.Integration.Abstractions.Fixtures;

// ServiceProviderCollectionDefinition  : CollectionDefinition
//                                         ↓
// ServiceProviderCollectionFixture     : CollectionFixture
//                                         ↓
// ServiceProviderFixture               : Fixture

[CollectionDefinition(CollectionName.ServiceProviderCollectionDefinition)]
public sealed class ServiceProviderCollectionFixture
    : ICollectionFixture<ServiceProviderFixture>
{
}

public sealed class ServiceProviderFixture
{
    public IServiceProvider ServiceProvider { get; }

    public ServiceProviderFixture()
    {
        ServiceProvider = ServiceProviderFactory.ServiceProvider;
    }

    public T GetRequiredService<T>() where T : notnull
    {
        return ServiceProvider.GetRequiredService<T>();
    }
}

public static class ServiceProviderFactory
{
    public static IServiceProvider ServiceProvider { get; }

    static ServiceProviderFactory()
    {
        ServiceProvider = BuildServiceProvider();
    }

    private static IServiceProvider BuildServiceProvider()
    {
        var services = new ServiceCollection();
        var configurations = GetConfiguration();

        IHostEnvironment environment = Substitute.For<IHostEnvironment>();
        environment.IsDevelopment().Returns(true);

        services
            .AddTransient(_ => configurations)
            .AddTransient(_ => environment)
            .RegisterAdaptersInfrastructureLayer(Substitute.For<ILoggingBuilder>())
            .RegisterAdaptersPersistenceLayer(environment);

        return services.BuildServiceProvider();
    }

    private static IConfiguration GetConfiguration()
    {
        var builder = new ConfigurationBuilder()
            .AddEnvironmentVariables();

        var path = Directory.GetParent(Environment.CurrentDirectory)!.Parent!.Parent!.FullName;
        builder.AddJsonFile(Path.Combine(path, AppsettingsIntegrationJson));

        return builder.Build();
    }
}