require 'rails_helper'

describe Interpreter do

  describe '#sort_by_language' do

    context 'when all languages are present' do

      context 'A hash is created' do

        before(:all) do
          @sort = Interpreter.sort_by_language
        end

        it 'returns a hash of unique languages and their count' do
          expect(@sort).to eq("spanish => 3")
        end


      end
    end
  end
end
