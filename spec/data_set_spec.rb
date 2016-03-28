require 'rails_helper'

SAMPLE_DATA = "data/tmp/interpreter_registry_03262016.xlsx"

describe DataSet do

  describe '#import_xlsx' do

    context 'when all required sheets and headers are present' do

      context 'when columns match data format correctly' do
        before(:all) do
          well_formatted_excel = "#{SAMPLE_DATA}"
          DataSet.import_xlsx(well_formatted_excel)
          @result = Interpreter.find_by(aoicid: 1224)

        end

        it 'returns KNOWN ENTRY (for language) other attributes as assigned correctly and does not raise a xlsx error' do
          # well_formatted_excel = "#{SAMPLE_DATA}"
          # DataSet.import_xlsx(well_formatted_excel)
          # result = Interpreter.find_by(aoicid: 1224)
          expect(@result.language).to eq("Spanish")
        end
        it 'returns KNOWN ENTRY (for email) other attributes as assigned correctly and does not raise a xlsx error' do
          # well_formatted_excel = "#{SAMPLE_DATA}"
          # DataSet.import_xlsx(well_formatted_excel)
          # result = Interpreter.find_by(aoicid: 1224)
          expect(@result.reg_email).to eq("paccha+spa@gmail.com")
        end
        it 'returns KNOWN ENTRY (for zipcode) other attributes as assigned correctly and does not raise a xlsx error' do
          # well_formatted_excel = "#{SAMPLE_DATA}"
          # DataSet.import_xlsx(well_formatted_excel)
          # result = Interpreter.find_by(aoicid: 1224)
          expect(@result.zip).to eq(60608)
        end
        it 'returns KNOWN ENTRY (circuit avaibility) other attributes as assigned correctly and does not raise a xlsx error' do
          expect(@result.circuit_availability).to eq("Cook")
        end

      end

      context 'when columns mismatch data format' do

        it 'raises an error' do

          format_mismatch_excel = "#{SAMPLE_DATA}_formats_wrong.xlsx"
          expect { DataSet.parse(format_mismatch_excel) }.to raise_error

        end

      end

    end

    context 'when required sheets are missing' do

      it 'raises an error' do

        missing_sheet_excel = "#{SAMPLE_DATA}_sheets_missing.xlsx"
        expect { DataSet.parse(missing_sheet_excel) }.to raise_error

      end

    end

    context 'when required columns are missing' do

      it 'raises an error' do

        missing_columns_excel = "SampleData_columns_missing.xlsx"
        expect { DataSet.parse(missing_columns_excel) }.to raise_error

      end

    end

  end

end
