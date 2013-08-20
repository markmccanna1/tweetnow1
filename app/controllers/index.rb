get '/' do
  # Look in app/views/index.erb
  erb :index
end


post '/tweet' do
  puts 1
  tweet = params[:tweet]
  puts tweet
  # @tweeter = tweeter
  # @test =  tweeter
  

  Twitter.user("markmccanna1")
  


  content_type :json
  {tweet: tweet}.to_json
end





