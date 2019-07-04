const faker = require('faker')
const { token, status, banks, method } = require('./vars')

/**
 * @param  Array arr
 */
const shuffleArray = arr =>
  arr
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1])

const user = {
  id: faker.random.number(999),
  name: faker.name.findName(),
  email: faker.internet.email()
}

const fileStatusByMonth = [...Array(6)].map((v, i) => ({
  files_info: [...Array(6)].map((value, index) => ({
    id: index + 1,
    month: 12 - index,
    total: faker.random.number(900),
    new: faker.random.number(10),
    without_return: faker.random.number(10),
    expired: faker.random.number(10)
  })),
  meta: {
    current_page: (i + 1),
    next_page: (i < 5 ? i + 2 : i + 1),
    page_records: 6,
    total_records: 6
  }
}))

const filesList = {
  type: 'debit',
  files: [...Array(50)].map((value, index) => ({
    id: index + 1,
    status: shuffleArray(status)[0],
    bank: shuffleArray(banks)[0],
    amount: faker.random.number(100),
    max_date_to_send: faker.date.between('2019-08-01', '2019-07-01'),
    expires_in: faker.date.between('2019-08-01', '2019-07-01')
  }))
}

const generateBankFile = { url: faker.internet.url() }
const importBankFile = { status: "success" }

const payments = [...Array(20)].map((v, i) => ({
  id: faker.random.uuid(),
  status: shuffleArray(status)[0],
  date: faker.date.recent(),
  donor: { name: faker.name.findName() },
  method: {
    type: shuffleArray(method.type)[0],
    card: {
      brand: shuffleArray(method.brands)[0],
    }
  },
  value: faker.finance.amount(3000, 99999, 0),
  currency: 'BRL'
}))

module.exports = () => ({
  user,
  token: { ...token, ...{ user } },
  file_status_by_month: fileStatusByMonth,
  files_list: filesList,
  generate_bank_file: generateBankFile,
  import_bank_file: importBankFile,
  payments
})
