package cloud.traffic.server.service;

import cloud.traffic.server.model.StatisticInfo;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.HttpClientBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URI;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class TrafficServiceImpl implements TrafficService {

    @Autowired
    private ObjectMapper mapper;

    @Override
    public StatisticInfo getStatistic(int id) {
        Map<Integer, List<Integer>> points = new HashMap<>();
        points.put(1, Arrays.asList(1, 4, 5, 6, 7, 3));
        points.put(2, Arrays.asList(2, 4, 5, 3, 0, 3));
        points.put(3, Arrays.asList(1, 7, 5, 6, 7, 9));

        return new StatisticInfo(points);
    }

    private String getUri(URI uri) throws IOException {
        HttpClient client = HttpClientBuilder.create().build();
        HttpGet request = new HttpGet(uri);
        HttpResponse response = client.execute(request);
        BufferedReader rd = new BufferedReader(new InputStreamReader(response.getEntity().getContent()));
        StringBuilder sb = new StringBuilder();
        String line;
        while ((line = rd.readLine()) != null) {
            sb.append(line);
        }

        return sb.toString();
    }

}
