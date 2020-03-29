class User < ApplicationRecord
    has_secure_password

    has_many :products, dependent: :destroy
    has_many :comments, dependent: :destroy

    validates :first_name, :last_name, :email, presence: true
    validates :email, uniqueness: { case_sensitive: false }, format: { with: URI::MailTo::EMAIL_REGEXP, allow_blank: false }

    before_save :downcase_email 

    def full_name
        "#{first_name} #{last_name}"
    end

    private

    def downcase_email
        self.email.downcase!
    end
end
