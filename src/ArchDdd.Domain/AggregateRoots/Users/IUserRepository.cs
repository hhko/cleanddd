﻿using ArchDdd.Domain.Abstractions.Contracts;
using ArchDdd.Domain.AggregateRoots.Users.ValueObjects;

namespace ArchDdd.Domain.AggregateRoots.Users;

public interface IUserRepository : IQueryRepository
{
    //Task<User?> GetByIdAsync(UserId id, CancellationToken cancellationToken);

    //Task<User?> GetByEmailAsync(Email email, CancellationToken cancellationToken);

    Task<User?> GetByUsernameAsync(Username username, CancellationToken cancellationToken);
    //Task<GetUserByUsernameResponse> GetByUsernameAsync2(Username username, CancellationToken cancellationToken);

    //Task<Role?> GetRolePermissionsAsync(Role role, CancellationToken cancellationToken);

    //Task<bool> IsEmailUniqueAsync(Email email, CancellationToken cancellationToken);

    Task<bool> IsEmailTakenAsync(Email email, CancellationToken cancellationToken);

    void Add(User user);

    void Update(User user);
}
