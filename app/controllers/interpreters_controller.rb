class InterpretersController < ApplicationController
  def index
      render json: Interpreter.all.where('aoicid > 0').order(aoicid: :asc)
    end

  # def default_menu_sort
  #   if params[:menu] == "extended"
  #     render json: Interpreter.sort_by_language
  #   else
  #     render json: Interpreter.sort_by_language.keys.first(4)
  #   end
  # end
end
