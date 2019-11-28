class StatsController < ApplicationController
   def new
        @stats = Stat.new
    end
    def index
        @stats = Stat.all
    end
    def show
        @stat = Stat.find(params[:id])
    end
    
    def create
        # render plain: params[:stats].inspect
        @stat = Stat.new(stat_params)
        if @stat.save
            redirect_to @stat
        else
            render 'new'
        end
    end

    def update
        @stat = Stat.find(params[:id])
        
        if @stat.update(stat_params)
            redirect_to @stat
        else
            render 'edit'
        end
    end

    def destroy
        @stat = Stat.find(params[:id])
        @stat.destroy
        
        redirect_to stats_path
    end

    private
    def stat_params
        params.require(:stats).permit(:libelle_metier, :description,:patience,:precision,:solitaire,:volonte,:ordonne,:logique)
    end
end