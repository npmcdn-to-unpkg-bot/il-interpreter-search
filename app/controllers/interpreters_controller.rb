class InterpretersController < ApplicationController
  def index
    render json: Interpreter.all
  end
end
