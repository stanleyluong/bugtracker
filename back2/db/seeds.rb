require 'faker'

User.destroy_all
Project.destroy_all
Bug.destroy_all
UserBug.destroy_all

20.times do
    Project.create(
        title:Faker::Movie.quote
        )
end

20.times do
    User.create(
        username: Faker::Artist.name,
        password: Faker::Alphanumeric.alpha(number: 10),
        image: Faker::LoremFlickr.image,
        role: Faker::Job.title,
        project_id: rand(Project.all.count)
        )
end

20.times do
    Bug.create(
        name:Faker::Hacker.abbreviation,
        priority:Faker::Job.employment_type,
        attachment:Faker::LoremFlickr.image,
        status:Faker::Quote.singular_siegler,
        description:Faker::Quote.famous_last_words,
        opened:Faker::Date.between(from: 2.days.ago, to: Date.today),
        closed:Faker::Date.between(from: 2.days.ago, to: Date.today),
        age:Faker::Date.between(from: 2.days.ago, to: Date.today),
        submitted_by:Faker::Games::LeagueOfLegends.champion,
        location:Faker::Games::LeagueOfLegends.location,
        assigned_to:User.all[rand(User.all.count)],
        project_id:rand(Project.all.count)
        )
end

40.times do
    UserBug.create(
        user_id:rand(User.all.count),
        bug_id:rand(Bug.all.count)
    )
end

40.times do
    UserProject.create(
        user_id: rand(User.all.count),
        project_id: rand(Project.all.count)
    )
end 