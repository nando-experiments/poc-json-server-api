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

const successfulPayments = faker.random.number(99999)
const hardBounces = faker.random.number(9999)
const softBounces = faker.random.number(9999)
const refunds = faker.random.number(999)
const totalAmount = (successfulPayments + hardBounces + softBounces + refunds)

const generalInfo = {
  // '_endpoint': '/admin/general_info',
  'successful_payments_amount': successfulPayments,
  'hard_bounces_amount': hardBounces,
  'soft_bounces_amount': softBounces,
  'refunds_amount': refunds,
  'total_amount': totalAmount,
  'chargebacks_count': 1,
  'charges_count': faker.random.number(9999),
  'efectiveness_rate': 97.5
}

const uniqueDonations = faker.random.number(9999)
const recurringDonations = faker.random.number(9999)
const canceledDonations = faker.random.number(9999)
const pausedDonations = faker.random.number(9999)
const totalDonationsCount = (uniqueDonations + recurringDonations + canceledDonations + pausedDonations)

const totalDonations = {
  // '_endpoint': '/admin/total_donations',
  'unique_donations_count': uniqueDonations,
  'recurring_donations_count': recurringDonations,
  'canceled_donations_count': canceledDonations,
  'paused_donations_count': pausedDonations,
  'total_donations_count': totalDonationsCount,
  'donations_per_month': {
    '2018/07': {
      'unique_count': faker.random.number(999),
      'recurring_count': faker.random.number(99),
      'canceled_count': faker.random.number(99),
      'paused_count': faker.random.number(9999)
    },
    '2018/08': {
      'unique_count': faker.random.number(999),
      'recurring_count': faker.random.number(99),
      'canceled_count': faker.random.number(99),
      'paused_count': faker.random.number(9999)
    },
    '2018/09': {
      'unique_count': faker.random.number(999),
      'recurring_count': faker.random.number(99),
      'canceled_count': faker.random.number(99),
      'paused_count': faker.random.number(9999)
    },
    '2018/10': {
      'unique_count': faker.random.number(999),
      'recurring_count': faker.random.number(99),
      'canceled_count': faker.random.number(99),
      'paused_count': faker.random.number(9999)
    },
    '2018/11': {
      'unique_count': faker.random.number(999),
      'recurring_count': faker.random.number(99),
      'canceled_count': faker.random.number(99),
      'paused_count': faker.random.number(9999)
    },
    '2018/12': {
      'unique_count': faker.random.number(999),
      'recurring_count': faker.random.number(99),
      'canceled_count': faker.random.number(99),
      'paused_count': faker.random.number(9999)
    },
    '2019/01': {
      'unique_count': faker.random.number(999),
      'recurring_count': faker.random.number(99),
      'canceled_count': faker.random.number(99),
      'paused_count': faker.random.number(9999)
    },
    '2019/02': {
      'unique_count': faker.random.number(999),
      'recurring_count': faker.random.number(999),
      'canceled_count': faker.random.number(999),
      'paused_count': faker.random.number(999)
    },
    '2019/03': {
      'unique_count': faker.random.number(999),
      'recurring_count': faker.random.number(99),
      'canceled_count': faker.random.number(99),
      'paused_count': faker.random.number(9999)
    },
    '2019/04': {
      'unique_count': faker.random.number(999),
      'recurring_count': faker.random.number(99),
      'canceled_count': faker.random.number(99),
      'paused_count': faker.random.number(9999)
    },
    '2019/05': {
      'unique_count': faker.random.number(999),
      'recurring_count': faker.random.number(99),
      'canceled_count': faker.random.number(99),
      'paused_count': faker.random.number(9999)
    },
    '2019/06': {
      'unique_count': faker.random.number(999),
      'recurring_count': faker.random.number(99),
      'canceled_count': faker.random.number(99),
      'paused_count': faker.random.number(9999)
    }
  }
}

const cohortData = {
  '2018/08': [ 807, 807, 636, 521, 422, 381, 321, 212, 185, 142, 122, 51, 15 ],
  '2018/09': [ 782, 782, 613, 502, 405, 325, 302, 198, 165, 122, 85, 12 ],
  '2018/10': [ 762, 762, 592, 482, 377, 295, 274, 175, 133, 87, 32 ],
  '2018/11': [ 741, 741, 572, 461, 364, 287, 265, 154, 128, 35 ],
  '2018/12': [ 737, 737, 556, 432, 321, 254, 232, 182, 102 ],
  '2019/01': [ 707, 707, 656, 0, 321, 254, 232, 102 ],
  '2019/02': [ 693, 693, 510, 386, 0, 221, 187 ],
  '2019/03': [ 675, 675, 0, 362, 230, 195 ],
  '2019/04': [ 659, 659, 472, 342, 187 ],
  '2019/05': [ 632, 632, 456, 316 ],
  '2019/06': [ 612, 612, 431 ],
  '2019/07': [ 587, 587 ]
}

module.exports = () => ({
  token: { ...token, ...{ user } },
  monthly_metrics: monthlyMetrics,
  bank_files: bankFiles,
  generate_bank_file: generateBankFile,
  import_bank_file: importBankFile,
  payments,
  general_info: generalInfo,
  total_donations: totalDonations,
  cohort_data: cohortData
})
