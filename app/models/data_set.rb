require 'roo'

class DataSet

  REQUIRED_HEADERS = [

      # from default (empty search) sheet
      "Language",
      "Status",
      # "AOIC Registry #"
      "AOIC\n Registry #",
      "Last Name",
      "First Name",
      "Middle Initial",
      "Email Address",
      "Phone Number",
      "Address",
      "City",
      "State",
      "Zip",
      "Circuits",
      "Comments"
  ]

  HEADER_DICTIONARY = {

    # default sheet
    "Language" => :language,
    "Status" => :certification,
    # "AOIC Registry #" => :aoicid,
    "AOIC\n Registry #" => :aoicid,
    "Last Name" => :last_name,
    "First Name" => :first_name,
    "Middle Initial" => :middle_name, # only initials available here
    "Email Address" => :reg_email,
    "Phone Number" => :phone,
    "Address" => :address1,
    "City" => :city,
    "State" => :state,
    "Zip" => :zip,
    "Circuits" => :circuit_availability,
    "Comments" => :comments
  }

  # TO_BOOLEAN = {
  #   "FALSE" => false,
  #   "TRUE" => true
  # }

  def self.import_xlsx(xlsx)

    xlsx = Roo::Excelx.new(xlsx, extension: :xlsx)

    xlsx.each_with_pagename do |name, sheet|

      first_column = sheet.first_column
      last_column = sheet.last_column
      first_row = sheet.first_row
      last_row = sheet.last_row

      header_row = 1
      new_id_column = 3

      ((first_column)..last_column).each do |c|
        header = sheet.cell(header_row, c)

        if REQUIRED_HEADERS.include? header
#          puts "(required header) Header is: #{header}"
          first_row += 1

          (first_row..last_row).each do |r|
            new_id = sheet.cell(r, new_id_column)
            interpreter = Interpreter.where(aoicid: new_id).first_or_create(aoicid: new_id.to_i)
            attribute = HEADER_DICTIONARY[header]
            value = sheet.cell(r, c)
            case attribute
            when :language
              if value == "ALL Circuits"
                cast_value = "Cook, 1st, 2nd, 3rd, 4th, 5th, 6th, 7th, 8th, 9th, 10th, 11th, 12th, 13th, 14th, 15th, 16th, 17th, 18th, 20th, 21st, 22nd, 23rd"
              elsif value == ""
                cast_value = nil
              else
                cast_value = value
              end
            when :middle_name
              if value == "-"
                cast_value = ""
              elsif value == ""
                cast_value = nil
              else
                cast_value = value
              end
            when :comments
              if value == "-"
                cast_value = "none"
              elsif value == ""
                cast_value = nil
              else
                cast_value = value
              end
          when :zip
              cast_value = value.to_i
              if cast_value == 0
                cast_value = nil
              end
            else
              if value.length > 0
                cast_value = value
                # puts "\t\t\t\t\t...auto assigned (CASE else statement)"
              else
                cast_value = nil
              end
            end

            interpreter.send("#{attribute}=", cast_value)
            # puts "AOIC Interpreter #{new_id} has #{attribute} of #{cast_value} (#{cast_value.class})\n\n\n"
            interpreter.save

          end
        end
      end
    end
  end
end
