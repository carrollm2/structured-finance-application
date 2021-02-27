class ReportSerializer < ActiveModel::Serializer
  attributes :id, :category, :report_link, :report_date, :rating_agency, :deal_id
end
