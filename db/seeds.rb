user_attributes = [
  {
    name: 'Chief',
    email: 'chief@dogs.com',
    password: 'chief',
    password_confirmation: 'chief'
  },
  {
    name: 'Dakota',
    email: 'dakota@dogs.com',
    password: 'dakota',
    password_confirmation: 'dakota'
  },
  {
    name: 'Chester',
    email: 'chester@dogs.com',
    password: 'chester',
    password_confirmation: 'chester'
  }
]

user_attributes.each do |attributes|
  User.create(attributes)
end
