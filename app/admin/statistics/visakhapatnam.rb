ActiveAdmin.register_page 'Visakhapatnam' do
  menu parent: 'Statistics'

  page_action :startups_count_agreement_signed do
    render json: Statistic.chartkick_parameter_by_date(Statistic::PARAMETER_COUNT_STARTUPS_AGREEMENT_SIGNED, incubation_location: Startup::INCUBATION_LOCATION_VISAKHAPATNAM)
  end

  page_action :startups_count_live_agreement do
    render json: Statistic.chartkick_parameter_by_date(Statistic::PARAMETER_COUNT_STARTUPS_LIVE_AGREEMENT, incubation_location: Startup::INCUBATION_LOCATION_VISAKHAPATNAM)
  end

  page_action :startups_count_current_split do
    render json: Startup.current_startups_split_by_incubation_location(Startup::INCUBATION_LOCATION_VISAKHAPATNAM)
  end

  page_action :startups_count_split do
    render json: [
        { name: 'Unready', data: Statistic.chartkick_parameter_by_date(Statistic::PARAMETER_COUNT_STARTUPS_UNREADY, incubation_location: Startup::INCUBATION_LOCATION_VISAKHAPATNAM) },
        { name: 'Pending', data: Statistic.chartkick_parameter_by_date(Statistic::PARAMETER_COUNT_STARTUPS_PENDING, incubation_location: Startup::INCUBATION_LOCATION_VISAKHAPATNAM) },
        { name: 'Approved', data: Statistic.chartkick_parameter_by_date(Statistic::PARAMETER_COUNT_STARTUPS_APPROVED, incubation_location: Startup::INCUBATION_LOCATION_VISAKHAPATNAM) },
        { name: 'Rejected', data: Statistic.chartkick_parameter_by_date(Statistic::PARAMETER_COUNT_STARTUPS_REJECTED, incubation_location: Startup::INCUBATION_LOCATION_VISAKHAPATNAM) }
      ]
  end

  content do
    render 'admin/statistics/visakhapatnam'
  end
end
