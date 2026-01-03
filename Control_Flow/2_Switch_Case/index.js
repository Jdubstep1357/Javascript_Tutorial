let role = 'guest';

// check if role is guest, user, or admin

switch (variable) {
    case 'guest':
        console.log('Guest user');
        break;

    case 'moderator':
        console.log('Moderator User');
        break;

    // If none match
    default:
        console.log('Unknown user');
}


// Using if statements
if (role === 'guest') console.log('Guest user');
else if (role === 'moderator') console.log('Moderator');
else console.log('Unknown user');