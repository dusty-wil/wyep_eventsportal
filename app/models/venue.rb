# == Schema Information
#
# Table name: venues
#
#  id           :integer          not null, primary key
#  name         :string
#  bio          :text
#  tags         :string
#  neighborhood :string
#  address_1    :string
#  address_2    :string
#  zipcode      :string
#  latitude     :decimal(, )
#  longitude    :decimal(, )
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  city         :string
#  state        :string
#  category     :string
#  url          :string
#  source       :string
#  src_id       :string
#

class Venue < ApplicationRecord
end
