class InterpretersController < ApplicationController
  def index
      # render json: Interpreter.all.where('aoicid > 0').order(aoicid: :asc).first(8)
      render json: Interpreter.all.where('aoicid > 0').order("random()").first(8)
    end

  def default_menu_sort
    if params[:menu] == "extended"
      render json: Interpreter.sort_by_language.map {|k,v| {language: k, count: v } }
    else
      render json: Interpreter.sort_by_language.first(4)
    end
  end
end
