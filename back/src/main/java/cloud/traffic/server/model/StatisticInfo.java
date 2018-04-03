package cloud.traffic.server.model;

import lombok.Data;

import java.util.List;
import java.util.Map;

@Data
public class StatisticInfo {
    private Map<Integer, List<Integer>> points;

    public StatisticInfo(Map<Integer, List<Integer>> points) {
        this.points = points;
    }

}
