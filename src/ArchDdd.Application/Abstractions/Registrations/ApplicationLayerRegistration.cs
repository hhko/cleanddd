﻿namespace Microsoft.Extensions.DependencyInjection;

public static class ApplicationLayerRegistration
{
    public static IServiceCollection RegisterApplicationLayer(
        this IServiceCollection services)
    {
        services
            .RegisterValidation()
            //.RegisterMiddlewares()
            .RegisterMediator();

        return services;
    }

    //public static IApplicationBuilder UseApplicationLayer(
    //    this IApplicationBuilder app)
    //{
    //    app.UseMiddlewares();

    //    return app;
    //}
}
