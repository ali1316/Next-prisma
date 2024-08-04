import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Create a user
    const user = await prisma.user.create({
        data: {
            username: 'john_doe',
            email: 'john_doe@example.com',
            password_hash: 'hashed_password',
            posts: {
                create: [
                    {
                        title: 'First Post',
                        slug: 'first-post',
                        content: 'This is my first post',
                        published: true,
                    },
                    {
                        title: 'Second Post',
                        slug: 'second-post',
                        content: 'This is my second post',
                        published: false,
                    },
                ],
            },
        },
    });

    // Create another user
    const user2 = await prisma.user.create({
        data: {
            username: 'jane_doe',
            email: 'jane_doe@example.com',
            password_hash: 'hashed_password_2',
            posts: {
                create: [
                    {
                        title: 'Jane\'s Post',
                        slug: 'janes-post',
                        content: 'This is Jane\'s post',
                        published: true,
                    },
                ],
            },
        },
    });

    console.log({ user, user2 });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
