import csv
import pandas as pd
import numpy as np

prev_vals = np.arange(0.005, 0.245, 0.005).tolist()

prev_vals = [round(num, 3) for num in prev_vals]

num_toggles = 25 #number of specificity/sensitivity combinations

mapping = {}

#construct mapping of tuples to index
#build np array of reformatted data
#loop csv for specific tolerance
#add min n to specific index in np.zeros(numprevs, numtuples)
#write columns array first
#loop through np array and write (prev val + row)

column_names = ["prevalence"]

with open('new_serology.csv') as csvfile:
	reader = csv.reader(csvfile)
	count = 0
	for row in reader:
		if count > num_toggles:
			break
		if count != 0:
			column_names.append(str((float(row[0]), float(row[1]))))
			mapping[(row[0], row[1])] = count - 1
		count += 1

reform = np.zeros((len(prev_vals), num_toggles))

with open('new_serology.csv') as csvfile:
	reader = csv.reader(csvfile)
	count = 0
	for row in reader:
		if count != 0:
			xindex = prev_vals.index(float(row[2]))
			yindex = mapping[(row[0], row[1])]
			reform[xindex][yindex] = float(row[6])
		count += 1

with open('formatted_prevalence.csv', 'w', newline='') as csvfile:
	writer = csv.writer(csvfile)
	writer.writerow(column_names)
	for i in range(0, len(prev_vals)):
		prev = prev_vals[i]
		column_data = list(reform[i])
		column_data.insert(0, prev)
		writer.writerow(column_data)










#np.zeros(len(prev_vals, 25)

'''
(0.8,0.8)
(0.85,0.8)
(0.9	0.8
0.95	0.8
1	0.8
0.8	0.85
0.85	0.85
0.9	0.85
0.95	0.85
1	0.85
0.8	0.9
0.85	0.9
0.9	0.9
0.95	0.9
1	0.9
0.8	0.95
0.85	0.95
0.9	0.95
0.95	0.95
1	0.95
0.8	1
0.85	1
0.9	1
0.95	1
1	1
'''

#df = pd.read_csv('serology_exploration_data.csv')
