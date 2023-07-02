const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
async function main() {
  await prisma.gender.create({
    data:{
        name: 'masculino'
    }
  })
  await prisma.gender.create({
    data: {name: 'feminino'}
  })
  await prisma.gender.create({
    data: {name: 'outros'}
  })

}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })