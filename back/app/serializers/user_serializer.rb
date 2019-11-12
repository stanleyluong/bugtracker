class UserSerializer < ActiveModel::Serializer
    attributes :username, :password, :firstname,:lastname,:email, :job,:image
end
