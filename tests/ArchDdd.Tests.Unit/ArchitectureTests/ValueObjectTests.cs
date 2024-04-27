﻿using ArchDdd.Domain.Abstractions.BaseTypes;
using ArchDdd.Tests.Unit.ArchitectureTests.Utilities;
using NetArchTest.Rules;
using static ArchDdd.Tests.Unit.Abstractions.Constants.Constants;

namespace ArchDdd.Tests.Unit.ArchitectureTests;

[Trait(nameof(UnitTest), UnitTest.Architecture)]
public sealed class ValueObjectTests
{
    [Fact]
    public void ValueObjects_ShouldBeImmutable()
    {
        // Arrange
        var assembly = Domain.AssemblyReference.Assembly;

        // Act
        var result = Types
            .InAssembly(assembly)
            .That()
            .Inherit(typeof(ValueObject))
            .Should()
            .BeImmutable()
            .GetResult();

        // Assert
        result.IsSuccessful.Should().BeTrue();
    }

    [Theory]
    [InlineData("Validate")]
    [InlineData("Create")]
    public void ValueObjects_ShouldDefineMethod(string methodName)
    {
        // Arrange
        var assembly = Domain.AssemblyReference.Assembly;

        // Act
        var result = Types
            .InAssembly(assembly)
            .That()
            .Inherit(typeof(ValueObject))
            .Should()
            .DefineMethod(methodName)
            .GetResult();

        // Assert
        result.IsSuccessful.Should().BeTrue();
    }
}
