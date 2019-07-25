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

const monthlyMetrics = [...Array(6)].map((v, i) => ({
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

const bankFiles = {
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
const importBankFile = { status: 'success' }

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
  token: { ...token, ...{ user } },
  monthly_metrics: monthlyMetrics,
  bank_files: bankFiles,
  generate_bank_file: generateBankFile,
  import_bank_file: importBankFile,
  payments,
  general_info: {
    '_endpoint': '/admin/general_info',
    'successful_payments_amount': 1141592,
    'hard_bounces_amount': 34425,
    'soft_bounces_amount': 5504,
    'refunds_amount': 12,
    'chargebacks_count': 1,
    'charges_count': 40000,
    'efectiveness_rate': 97.5
  },
  total_donations: {
    '_endpoint': '/admin/total_donations',
    'unique_donations_count': 20719,
    'recurring_donations_count': 17000,
    'canceled_donations_count': 3400,
    'paused_donations_count': 2000,
    'total_donations_count': 50000,
    'donations_per_month': {
      '2019/07': {
        'unique_count': 300,
        'recurring_count': 100,
        'canceled_count': 100,
        'paused_count': 100
      },
      '2019/06': {
        'unique_count': 200,
        'recurring_count': 50,
        'canceled_count': 2,
        'paused_count': 1000
      },
    }
  },
  cohort_data: {
    '_endpoint': '/admin/cohort_data',
    'donations_per_month': {
      '2019/07': {
        'donations_count': 400,
        'monthly_taxes': {
          '1': 100.0
        }
      },
      '2019/06': {
        'donations_count': 400,
        'monthly_taxes': {
          '1': 100.0,
          '2': 89.7
        }
      },
      '2019/05': {
        'donations_count': 400,
        'monthly_taxes': {
          '1': 100.0,
          '2': 92.6,
          '3': 80.0,
        }
      }
    }
  }
})
