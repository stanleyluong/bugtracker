class UserSerializer < ActiveModel::Serializer
    attributes :id, :username, :password, :firstname,:lastname,:email, :job, :image
end
