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
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Random;

@Service
public class TrafficServiceImpl implements TrafficService {

    @Autowired
    private ObjectMapper mapper;

    @Override
    public StatisticInfo getStatistic(int n1, int n2) {
        if (n1 > n2) {
            return new StatisticInfo(Collections.emptyList());
        }
        int range = n2 - n1;
        List<Integer> doubles = new ArrayList<>(range);
        for (int i = 0; i < range; i++) {
            doubles.add(new Random().nextInt(100));
        }
        return new StatisticInfo(doubles);
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
