package cloud.traffic.server.service;

import cloud.traffic.server.model.StatisticInfo;

public interface TrafficService {

    StatisticInfo getStatistic(int n1, int n2);

}
