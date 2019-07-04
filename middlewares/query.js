module.exports = (req, res, next) => {
  const { page, sort, order } = req.query

  if (typeof page !== 'undefined') {
    req.query = {
      ...req.query,
      ...{ _page: page }
    }

    // delete req.query.page
  }

  if (typeof sort !== 'undefined') {
    req.query = {
      ...req.query,
      ...{ _sort: sort }
    }

    // delete req.query.sort
  }

  if (typeof order !== 'undefined') {
    req.query = {
      ...req.query,
      ...{ _order: order }
    }

    // delete req.query.order
  }

  // req.query = {
  //   ...req.query,
  //   ...{ _limit: 1 }
  // }

  next()
}
