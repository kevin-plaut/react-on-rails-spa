user_attributes = [
  {
    name: 'Chief',
    email: 'chief@dogs.com',
    password: 'chiefpassword',
    password_confirmation: 'chiefpassword',
    role: 'admin'
  },
  {
    name: 'Dakota',
    email: 'dakota@dogs.com',
    password: 'dakotapassword',
    password_confirmation: 'dakotapassword',
    role: 'user'
  },
  {
    name: 'Chester',
    email: 'chester@dogs.com',
    password: 'chesterpassword',
    password_confirmation: 'chesterpassword',
    role: 'user'
  }
]

user_attributes.each do |attributes|
  User.create(attributes)
end

post_attributes = [
  {
    post: "It's been a 'ruff' day",
    user_id: 1
  },
  {
    post: "Squirrel!",
    user_id: 2
  },
  {
    post: "Thanks 'fur' the heads-up!",
    user_id: 3
  },
]

post_attributes.each do |attributes|
  Post.create(attributes)
end
