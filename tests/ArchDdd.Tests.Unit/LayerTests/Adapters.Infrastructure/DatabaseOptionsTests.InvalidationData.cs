﻿using ArchDdd.Adapters.Infrastructure.Options;
using ArchDdd.Adapters.Infrastructure.Utilities;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using NSubstitute;

namespace ArchDdd.Tests.Unit.LayerTests.Adapters.Infrastructure;

public partial class DatabaseOptionsTests
{
    [Theory]
    [ClassData(typeof(InvalidData))]
    public void DatabaseOptions_WhenAppsettingsIsInvalid_ShouldThrow(Dictionary<string, string> inMemorySettings)
    {
        // Arrange
        IConfiguration configuration = new ConfigurationBuilder()
            .AddInMemoryCollection(inMemorySettings!)
            .Build();

        var services = new ServiceCollection();
        services
            .AddTransient(_ => configuration)
            .AddTransient(_ => Substitute.For<IWebHostEnvironment>())
            .RegisterAdapterInfrastructureLayer();

        // Act
        Action act = () => services.GetOptions<DatabaseOptions>();

        // Assert
        act.Should().ThrowExactly<OptionsValidationException>();
    }

    private class InvalidData : IEnumerable<object[]>
    {
        public IEnumerator<object[]> GetEnumerator()
        {
            yield return new object[] { new Dictionary<string, string> {
                    { "DatabaseOptions:ConnectionString", "appsettings.메모리.json... ConnectionString" },
                    { "DatabaseOptions:MaxRetryCount", "0"},                    // Invalid
                    { "DatabaseOptions:MaxRetryDelay", "1"},
                    { "DatabaseOptions:CommandTimeout", "1"}
                } };
            yield return new object[] { new Dictionary<string, string> {
                    { "DatabaseOptions:ConnectionString", "appsettings.메모리.json... ConnectionString" },
                    { "DatabaseOptions:MaxRetryCount", "1"},
                    { "DatabaseOptions:MaxRetryDelay", "0"},                    // Invalid
                    { "DatabaseOptions:CommandTimeout", "1"}
                } };
            yield return new object[] { new Dictionary<string, string>
            {
                    { "DatabaseOptions:ConnectionString", "appsettings.메모리.json... ConnectionString" },
                    { "DatabaseOptions:MaxRetryCount", "1"},
                    { "DatabaseOptions:MaxRetryDelay", "1"},
                    { "DatabaseOptions:CommandTimeout", "0"}                    // Invalid
                } };
            yield return new object[] { new Dictionary<string, string> {
                    { "DatabaseOptions:ConnectionString", "appsettings.메모리.json... ConnectionString" },
                    { "DatabaseOptions:MaxRetryCount", "0"},                    // Invalid
                    { "DatabaseOptions:MaxRetryDelay", "0"},                    // Invalid
                    { "DatabaseOptions:CommandTimeout", "0"}                    // Invalid
                } };
            yield return new object[] { new Dictionary<string, string> {
                    { "DatabaseOptions:ConnectionString", "" },                 // Invalid
                    { "DatabaseOptions:MaxRetryCount", "1"},
                    { "DatabaseOptions:MaxRetryDelay", "1"},
                    { "DatabaseOptions:CommandTimeout", "1"}
                } };
            yield return new object[] { new Dictionary<string, string> {
                    { "DatabaseOptions:ConnectionString", "" },                 // Invalid
                    { "DatabaseOptions:MaxRetryCount", "0"},                    // Invalid
                    { "DatabaseOptions:MaxRetryDelay", "0"},                    // Invalid
                    { "DatabaseOptions:CommandTimeout", "0"}                    // Invalid
                } };
            yield return new object[] { new Dictionary<string, string>() };     // Invalid
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return GetEnumerator();
        }
    }
}

