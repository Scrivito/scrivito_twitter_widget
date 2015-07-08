class TwitterWidget < Widget
  attribute :tweet_id, :string
  attribute :type, :enum, values: ['tweet', 'timeline', 'video'], default: 'tweet'
end
