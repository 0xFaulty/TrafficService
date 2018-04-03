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
import java.util.Collections;

@Service
public class TrafficServiceImpl implements TrafficService {

    @Autowired
    private ObjectMapper mapper;

    @Override
    public StatisticInfo getStatistic(int id) {
        return new StatisticInfo(Arrays.asList(1d, 2d, 3d, 4d, 5d, 4d, 3d, 7d, 8d));
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
