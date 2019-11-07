require 'faker'

User.destroy_all
Project.destroy_all
Bug.destroy_all
UserBug.destroy_all
UserProject.destroy_all
# ProjectBug.destroy_all

10.times do
    Project.create(
        title:Faker::Games::LeagueOfLegends.masteries
        )
end

10.times do
    User.create(
        username: Faker::Games::LeagueOfLegends.champion,
        password: Faker::Alphanumeric.alpha(number: 10),
        firstname: Faker::Name.first_name,  
        lastname: Faker::Name.last_name, 
        email: Faker::Internet.email,
        image: Faker::Avatar.image(size: "75x75"),
        job: Faker::Job.title
    )
end

10.times do
    Bug.create(
        name:Faker::Games::LeagueOfLegends.rank,
        priority:["Low","Medium","High","Critical"].sample,
        attachment:Faker::Avatar.image(size: "75x75"),
        status:["Can't reproduce","In progress","Complete","Blocked","Won't fix","Duplicate"].sample,
        description:Faker::Games::LeagueOfLegends.quote,
        opened:Faker::Date.backward(days: 100),
        closed:nil,
        age:Faker::Date.between(from: 2.days.ago, to: Date.today),
        submitted_by:Faker::Games::LeagueOfLegends.champion,
        location:Faker::Games::LeagueOfLegends.location,
        project: Project.all.sample
    )
end

10.times do
    UserBug.create(
        user_id:rand(User.all.count),
        bug_id:rand(Bug.all.count)
    )
end

10.times do
    UserProject.create(
        user_id: rand(User.all.count),
        project_id: rand(Project.all.count)
    )
end 

