require 'faker'

User.destroy_all
Project.destroy_all
Bug.destroy_all
UserBug.destroy_all
UserProject.destroy_all

10.times do
    Project.create(
        title:Faker::Games::LeagueOfLegends.masteries
        )
end

10.times do
    User.create(
        username: Faker::Games::LeagueOfLegends.champion,
        password: 'password',
        firstname: Faker::Name.first_name,  
        lastname: Faker::Name.last_name, 
        email: Faker::Internet.email,
        image: Faker::Avatar.image(size: "75x75"),
        job: Faker::Job.title
    )
end

# User.create(username: 'stanzz', password:'luong',firstname: 'stan',lastname:'luong',email:'xstanz@gmail.com',job:'pimp')

# User.create(username: 'jared from subway',password:'jared',firstname:'subway',lastname:'badass',email: 'jared@jared.com',job:'asdasd')
10.times do
    Bug.create(
        name:Faker::Games::LeagueOfLegends.rank,
        priority:["Low","Medium","High","Critical"].sample,
        attachment:Faker::Avatar.image(size: "75x75"),
        status:["Can't reproduce","In progress","Complete","Blocked","Won't fix","Duplicate"].sample,
        description:Faker::Games::LeagueOfLegends.quote,
        opened:Faker::Date.backward(days: 100),
        closed:Faker::Date.between(from: 2.days.ago, to: Date.today),
        age:nil,
        submitted_by:Faker::Games::LeagueOfLegends.champion,
        location:Faker::Games::LeagueOfLegends.location,
        project: Project.all.sample
    )
end

UserBug.create(user_id: 1, bug_id: 1)
UserBug.create(user_id: 2, bug_id: 2)
UserBug.create(user_id: 3, bug_id: 3)
UserBug.create(user_id: 4, bug_id: 4)
UserBug.create(user_id: 5, bug_id: 5)
UserBug.create(user_id: 6, bug_id: 6)
UserBug.create(user_id: 7, bug_id: 7)
UserBug.create(user_id: 8, bug_id: 8)
UserBug.create(user_id: 9, bug_id: 9)
UserBug.create(user_id: 10, bug_id: 10)

10.times do
    UserProject.create(
        user_id: User.all.sample.id,
        project_id: Project.all.sample.id
    )
end 

