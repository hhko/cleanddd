﻿using ArchDdd.Application.Abstractions;
using ArchDdd.Application.Abstractions.CQRS;
using ArchDdd.Domain.Abstractions.Results;
using ArchDdd.Domain.Abstractions.Results.Contracts;
using PrimitiveUtilities;

namespace ArchDdd.Adapters.Infrastructure.Validators;

public sealed class Validator : IValidator
{
    private readonly List<Error> _errors = [];
    public bool IsValid => _errors.IsNullOrEmpty();
    public bool IsInvalid => !IsValid;

    public IValidator If(bool condition, Error thenError)
    {
        if (condition is true)
        {
            _errors.Add(thenError);
        }

        return this;
    }

    public IValidator Validate(IResult result)
    {
        if (result.IsFailure)
        {
            _errors.Add(result.Error);
        }

        return this;
    }

    public IValidator Validate<TType>(IResult<TType> result)
    {
        if (result.IsFailure)
        {
            _errors.Add(result.Error);
        }

        return this;
    }

    public IValidator Validate<TType>(ValidationResult<TType> validationResult)
    {
        if (validationResult.IsFailure)
        {
            _errors.AddRange(validationResult.ValidationErrors);
        }

        return this;
    }

    public ValidationResult<TResponse> Failure<TResponse>()
        where TResponse : IResponse
    {
        if (IsValid)
        {
            throw new InvalidOperationException("Validation was successful, but Failure was called");
        }

        return ValidationResult<TResponse>.WithErrors(_errors.ToArray());
    }

    public ValidationResult Failure()
    {
        if (IsValid)
        {
            throw new InvalidOperationException("Validation was successful, but Failure was called");
        }

        return ValidationResult.WithErrors(_errors.ToArray());
    }
}
