﻿using ArchDdd.Domain.AggregateRoots.Users.ValueObjects;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace ArchDdd.Adapters.Persistence.Repositories.Converters.ValueObjects;

public sealed class UsernameConverter : ValueConverter<Username, string>
{
    public UsernameConverter()
        : base(username => username.Value,
            @string => Username.Create(@string).Value)
    {
    }
}

public sealed class UsernameComparer : ValueComparer<Username>
{
    public UsernameComparer()
        : base((username1, username2) => username1!.Value == username2!.Value,
            @string => @string.GetHashCode())
    {
    }
}
