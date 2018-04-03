package cloud.traffic.server.model;

import lombok.Data;

import java.util.List;

@Data
public class StatisticInfo {
    private List<Double> points;

    public StatisticInfo(List<Double> points) {
        this.points = points;
    }

}
