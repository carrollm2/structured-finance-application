# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Deal.destroy_all
Report.destroy_all


deal_1 = Deal.create(ticker: 'JPPMT', series: '21-2', 'asset_class': 'rmbs')
deal_1.reports.build(category: "Press Release", report_link: "https://www.krollbondratings.com/documents/press-release/33935/kbra-assigns-ratings-to-j-p-morgan-mortgage-trust-2021-2-jpmmt-2021-2", rating_agency: "Kroll", report_date: DateTime.new(2021, 02, 19)).save


deal_2 = Deal.create(ticker: 'MSRM', series: '21-1', 'asset_class': 'rmbs')
deal_2.reports.build(category: "Pre-Sale", report_link: "https://www.krollbondratings.com/documents/report/45223/morgan-stanley-residential-mortgage-loan-trust-2021-1-pre-sale-report", rating_agency: "Kroll", report_date: DateTime.new(2021, 03, 12)).save


deal_3 = Deal.create(ticker: 'WFMBS', series: '21-1', 'asset_class': 'rmbs')
deal_3.reports.build(category: "Pre-Sale", report_link: "https://www.krollbondratings.com/documents/report/45047/wells-fargo-mortgage-backed-securities-2021-1-trust-wfmbs-2021-1-pre-sale-report", rating_agency: "Kroll", report_date: DateTime.new(2021, 03, 8)).save
deal_3.reports.build(category: "Press Release", report_link: "https://www.krollbondratings.com/documents/press-release/34687/kbra-assigns-preliminary-ratings-to-wells-fargo-mortgage-backed-securities-trust-2021-1-wfmbs-2021-1", rating_agency: "Kroll", report_date: DateTime.new(2021, 03, 8)).save