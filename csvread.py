import csv
import json

collist = ['prevalence', '(0.8, 0.8)', '(0.85, 0.8)', '(0.9, 0.8)', '(0.95, 0.8)', '(1.0, 0.8)', '(0.8, 0.85)', '(0.85, 0.85)', '(0.9, 0.85)', '(0.95, 0.85)', '(1.0, 0.85)', '(0.8, 0.9)', '(0.85, 0.9)', '(0.9, 0.9)', '(0.95, 0.9)', '(1.0, 0.9)', '(0.8, 0.95)', '(0.85, 0.95)', '(0.9, 0.95)', '(0.95, 0.95)', '(1.0, 0.95)', '(0.8, 1.0)', '(0.85, 1.0)', '(0.9, 1.0)', '(0.95, 1.0)', '(1.0, 1.0)'];

fieldnames = collist   
reader = csv.DictReader( open('static/formatted_prevalence.csv', 'r'), fieldnames)
next(reader, None)

dictscatter = []
for row in reader:
	for key in row:
		row[key] = float(row[key])
	print (row)
	dictscatter.append(row)

data = {}

data["d"] = dictscatter

with open('data.json', 'w') as f:
	json.dump(data, f)