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
  await prisma.statusDebts.create({
    data:{
        descricao: 'pago'
    }
  })

  await prisma.statusDebts.create({
    data:{
        descricao:  'em andamento'
    }
  })

  await prisma.statusDebts.create({
    data:{
        descricao: 'a vencer'
    }
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