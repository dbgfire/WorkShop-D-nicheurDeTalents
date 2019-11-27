class User < ApplicationRecord
    validates :firstname, presence: true,
                    length: { minimum: 5 }
    validates :lastname, presence: true,
                    length: { minimum: 5 }
    validates :mail, presence: true,
                    length: { minimum: 5 }
    validates :phone, presence: true,
                    length: { minimum: 5 }
end
