require 'faker'

User.destroy_all
Project.destroy_all
Bug.destroy_all
UserBug.destroy_all
UserProject.destroy_all
ProjectBug.destroy_all

10.times do
    Project.create(
        title:Faker::Movie.quote
        )
end

10.times do
    User.create(
        username: Faker::Name.name,
        password: Faker::Alphanumeric.alpha(number: 10),
        image: Faker::Avatar.image(size: "75x75"),
        role: Faker::Job.title
    )
end

10.times do
    Bug.create(
        name:Faker::Hacker.abbreviation,
        priority:Faker::Job.employment_type,
        attachment:Faker::Avatar.image(size: "75x75"),
        status:Faker::Quote.singular_siegler,
        description:Faker::Quote.famous_last_words,
        opened:"test",
        closed:"",
        age:Faker::Date.between(from: 2.days.ago, to: Date.today),
        submitted_by:Faker::Games::LeagueOfLegends.champion,
        location:Faker::Games::LeagueOfLegends.location
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

Bug.all.each do |bug|
    ProjectBug.create(
        project_id: rand(Project.all.count),
        bug_id: bug.id
    )
end