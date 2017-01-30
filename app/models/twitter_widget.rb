class TwitterWidget < Widget
  attribute :tweet_id, :string
  attribute :type, :enum, values: ['tweet', 'timeline'], default: 'tweet'

  attribute :conversation, :enum, values: ['none', 'all'], default: 'all'
  attribute :cards, :enum, values: ['hidden', 'visible']
  attribute :align, :enum, values: ['left', 'center', 'right'], default: 'left'
  attribute :theme, :enum, values: ['dark','light'], default: 'light'

  attribute :chrome, :multienum, values: ['noheader', 'nofooter', 'noborders', 'transparent', 'noscrollbar']
  attribute :height, :integer, default: 600
  attribute :limit, :integer, default: 7
  attribute :source_type, :enum, values: ['profile','likes','collection','widget'], default: 'profile'

  def data_attributes
    data = {
      id: tweet_id,
      type: type
    }

    if type == 'timeline'
      data[:chrome] = (chrome || []).join(',')
      data[:height] = height || 600
      data[:limit] = limit || 7
      data[:source_type] = source_type || 'profile'
    end

    if type == 'tweet'
      data[:conversation] = conversation || 'all'
      data[:cards] = cards
      data[:align] = align
      data[:theme] = theme || 'light'
    end

    return data
  end
end
