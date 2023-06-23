import Response from './Response';

export default class StreamerService {
  static AddStreamer = async (data) => {
    return Response.Call('/api/streamers/', 'POST', data);
  };

  static GetStreamers = async () => {
    return Response.Call(`/api/streamers/`, 'GET', null);
  };
  static GetStreamerById = async (streamerId) => {
    return Response.Call(`/api/streamer/${streamerId}/`, 'GET', null);
  };

  static StreamerVote = async (streamerId) => {
    return Response.Call(`/api/streamers/${streamerId}/`, 'PUT', null);
  };
}
