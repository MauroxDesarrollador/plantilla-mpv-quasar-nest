const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

const saltRounds = 10;

const parserPassword = async (password)=> {
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};
async function fakeUsers() {
  
  const Users = [
    {
      name: 'ADMIN',
      email: "admin@gmail.com",
      password: await parserPassword("admin"),
      roles:{
        connect:[{
          id:"1"
        }]
      }
    },
    {
      name: 'CAJERO',
      email: "cajero@gmail.com",
      password: await parserPassword("cajero"),
      roles:{
        connect:[{
          id:"2"
        }]
      }
    },
    {
      name: 'CONTADOR',
      email: "contador@gmail.com",
      password: await parserPassword("contador"),
      roles:{
        connect:[{
          id:"3"
        }]
      }
    },
  ];

  for (const [index, element]  of Users.entries()) {
    await prisma.User.upsert({
      where: { 
        email: element.email 
      },
      create: element,
      update: element
    });
  }
}

module.exports = fakeUsers;