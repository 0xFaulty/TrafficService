package cloud.traffic.server.model;

import lombok.Data;

import java.util.List;
import java.util.Map;

@Data
public class StatisticInfo {
    private List<Integer> points;

    public StatisticInfo(List<Integer> points) {
        this.points = points;
    }

}
