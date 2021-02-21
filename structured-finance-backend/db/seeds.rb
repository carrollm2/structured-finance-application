# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Deal.destroy_all
Report.destroy_all


deal_1 = Deal.create(ticker: 'JPPMT', series: '19-2', 'asset_class': 'rmbs')
deal_1.reports.build(category: "Pre-Sale", report_link: "www.krba.com", rating_agency: "Kroll", report_date: DateTime.new(2021, 01, 15)).save
deal_1.reports.build(category: "Downgrade", report_link: "wwww.moodys.com", rating_agency: "Moodys", report_date: DateTime.new(2020, 02, 15)).save
