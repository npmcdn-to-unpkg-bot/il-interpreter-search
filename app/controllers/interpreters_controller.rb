class InterpretersController < ApplicationController
  def index

    # @interpreters_by_language = Interpreter.all.where('aoicid > 0').order("random()").first(10)
    @interpreters_by_language = Interpreter.all.where('aoicid > 0').order(aoicid: :desc).first(10)
    render json: @interpreters_by_language
  end

  def default_menu_sort
    complete_menu = Interpreter.sort_by_language.each_with_index.map {|(k,v), index| {lid: index, language: k, count: v } }
    if params[:menu] == "extended"
      render json: complete_menu
    elsif params[:menu] == "asl"
      render json: complete_menu.keep_if { |h| h[:language] == "American Sign Language" }
    elsif params[:menu] == "lep"
      render json: complete_menu.delete_if { |h| h[:language] == "American Sign Language" }
    elsif params[:menu] == "intro"
      render json: complete_menu.first(4)
    else
      render json: complete_menu.first(4)
    end
  end

  # def sorting_params
  #   params.require(:sort).permit(:language)
  # end
end
