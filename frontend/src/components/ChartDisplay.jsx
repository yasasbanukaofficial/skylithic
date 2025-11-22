import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A line chart";

const chartData = [
  { day: "Saturday", temperature: 27 },
  { day: "Sunday", temperature: 22 },
  { day: "Monday", temperature: 25 },
];

const chartConfig = {
  desktop: {
    label: "Weather",
    color: "var(--chart-1)",
  },
};

export function ChartLineDefault() {
  return (
    <Card>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
            style={{ maxHeight: "150px" }}
          >
            <CartesianGrid vertical={false} horizontal={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="temperature"
              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={4}
              dot={true}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
