const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function fakeRoles() {
  
  const Datos = [
    {
      id:"1",
      name: 'ADMIN'
    },
    {
      id:"2",
      name: 'CAJERO'
    },
    {
      id:"3",
      name: 'CONTADOR'
    }
  ];

  for (const [index, element]  of Datos.entries()) {
    await prisma.role.upsert({
      where: { 
        name: element.name,
        id: element.id 
      },
      create: element,
      update: element
    });
  }
}

module.exports = fakeRoles;