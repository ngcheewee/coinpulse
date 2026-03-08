import DataTable from '@/components/DataTable';

export const CoinOverviewFallback = () => {
  return (
    <div id="coin-overview-fallback">
      <div className="header">
        <div className="header-image animate-pulse bg-dark-400" />
        <div className="info">
          <div className="header-line-sm animate-pulse rounded bg-dark-400" />
          <div className="header-line-lg animate-pulse rounded bg-dark-400" />
        </div>
      </div>

      <div className="flex gap-2">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="period-button-skeleton animate-pulse bg-dark-400" />
        ))}
      </div>

      <div className="chart">
        <div className="chart-skeleton animate-pulse bg-dark-400 mt-4" />
      </div>
    </div>
  );
};

export const TrendingCoinFallback = () => {
  const columns: DataTableColumn<number>[] = [
    {
      header: 'Name',
      cellClassName: 'name-cell',
      cell: () => (
        <div className="name-link">
          <div className="name-image animate-pulse bg-dark-400" />
          <div className="name-line animate-pulse rounded bg-dark-400" />
        </div>
      ),
    },
    {
      header: '24h Change',
      cellClassName: 'change-cell',
      cell: () => (
        <div className="price-change">
          <div className="change-icon animate-pulse bg-dark-400" />
          <div className="change-line animate-pulse rounded bg-dark-400" />
        </div>
      ),
    },
    {
      header: 'Price',
      cellClassName: 'price-cell',
      cell: () => <div className="price-line animate-pulse rounded bg-dark-400" />,
    },
  ];

  return (
    <div id="trending-coins-fallback">
      <h4>TrendingCoins</h4>

      <div className="trending-coins-table">
        <DataTable
          data={[...Array(6)].map((_, i) => i)}
          columns={columns}
          rowKey={(i) => i}
          tableClassName="trending-coins-table"
          headerCellClassName="py-3!"
          bodyCellClassName="py-2!"
        />
      </div>
    </div>
  );
};
